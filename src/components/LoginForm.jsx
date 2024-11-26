const LoginForm = () => {
  return (
    <form action="">
      <button type="submit" name="action" value="google" className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg">
        Sign In With Google
      </button>
      <button type="submit" name="action" value="github" className="bg-black text-white p-1 rounded-md m-1 text-lg">
        Sign In With GitHub
      </button>
    </form>
  );
};

export default LoginForm;
