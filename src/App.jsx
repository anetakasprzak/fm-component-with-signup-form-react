export default function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="cta">
        <Try />
        <Form />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header__section">
      <h1 className="header__heading">Learn to code by watching others</h1>
      <p className="header__p">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
}

function Try() {
  return (
    <p className="try__p">
      <span className="try__span">Try it free 7 days</span> then $20/mo.
      thereafter
    </p>
  );
}

function Form() {
  return (
    <div>
      <form className="form__section">
        <input className="input" type="text" placeholder="First Name" />
        <input className="input" type="text" placeholder="Last Name" />
        <input className="input" type="text" placeholder="Email Address" />
        <input className="input" type="text" placeholder="Password" />
        <button className="form__btn">Claim your free trial</button>
        <p className="form__p">
          By clicking the button, you are agreeing to our{" "}
          <span className="form__span">Terms and Services</span>
        </p>
      </form>
    </div>
  );
}
