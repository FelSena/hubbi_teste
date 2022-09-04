import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColumnForm } from "./style";

const Login = () => {
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    email: yup.string().email("Insira um email valido!"),
    password: yup.string().min(8, "Pelo menos 8 caracteres"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (response) => {
    const Login = axios.create({
      baseURL: "https://fake-api-hubbi.herokuapp.com/",
    });
    Login.post("login", response)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.accessToken);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <ColumnForm onSubmit={handleSubmit(onSubmitFunction)}>
      <span>hubbi@hubbi.com</span>
      <span>12345678</span>
      <TextField
        label="email"
        variant="outlined"
        {...register("email")}
        required
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <TextField
        label="Senha"
        variant="outlined"
        {...register("password")}
        required
        error={!!errors.password}
        helperText={errors.password?.message}
        type="password"
      />
      <Button variant="contained" type="submit">
        Login
      </Button>
    </ColumnForm>
  );
};

export default Login;
