import LoginGoogle from "./GoogleComponent";

export default  function Login (){
    return (
      <div className="Login">
          <div className="LoginForm">
              <div>
                 <LoginGoogle />
              </div>
          </div>
      </div>
    );
}
