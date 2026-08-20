import React, {
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
  useDebugValue,
  createContext,
} from "react";

/* =========================================================
   EXERCISE 2 - CREATING COMPONENTS
   ========================================================= */

function Profile() {
  return (
    <img
      src="https://i.imgur.com/yXOvdOSs.jpg"
      alt="Hedy Lamarr"
      width="150"
      style={{ borderRadius: "10px", margin: "10px" }}
    />
  );
}

function Gallery() {
  return (
    <section>
      <h2>Exercise 2 - Creating Components</h2>
      <h3>My Profile Gallery</h3>

      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

/* =========================================================
   FUNCTION COMPONENT - WARNING BUTTON
   ========================================================= */

function WarningButton() {
  return (
    <section>
      <h2>Function Component</h2>

      <button
        onClick={() => {
          alert("Are you sure?");
        }}
      >
        Don't Click Here
      </button>
    </section>
  );
}

/* =========================================================
   EXERCISE 3 - TODO LIST
   ========================================================= */

function TodoList() {
  return (
    <>
      <h2>Exercise 3 - Todo List</h2>

      <h3>Hedy Lamarr's Todos</h3>

      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        width="150"
      />

      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}

/* =========================================================
   EVENT
   ========================================================= */

class SimpleEvent extends React.Component {
  constructor(props) {
    super(props);
    this.work = this.work.bind(this);
  }

  work() {
    alert("Good Work");
  }

  render() {
    return (
      <section>
        <h2>Event</h2>

        <button onClick={this.work}>Do some work!</button>
      </section>
    );
  }
}

/* =========================================================
   FORMS
   ========================================================= */

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  handleSubmit(event) {
    alert("A name was entered: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <h2>Forms</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              style={{
                marginLeft: "10px",
                padding: "5px",
              }}
            />
          </label>

          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

/* =========================================================
   REFS
   ========================================================= */

class SimpleRef extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert("A name was entered: " + this.inputRef.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <section>
        <h2>Refs</h2>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              ref={this.inputRef}
              style={{
                marginLeft: "10px",
                padding: "5px",
              }}
            />
          </label>

          <br />
          <br />

          <input type="submit" value="Submit" />
        </form>
      </section>
    );
  }
}

/* =========================================================
   STYLING REACT
   ========================================================= */

function StylingExample() {
  const boxStyle = {
    padding: "20px",
    marginTop: "10px",
    backgroundColor: "#e8f0fe",
    border: "2px solid #4285f4",
    borderRadius: "10px",
  };

  return (
    <section>
      <h2>Styling React</h2>

      <div style={boxStyle}>
        This section demonstrates styling in React using inline styles.
      </div>
    </section>
  );
}

/* =========================================================
   ROUTING
   ========================================================= */

function RoutingExample() {
  const [route, setRoute] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  return (
    <section>
      <h2>Routing</h2>

      <button onClick={() => navigate("#home")}>Home</button>

      <button
        onClick={() => navigate("#about")}
        style={{ marginLeft: "10px" }}
      >
        About
      </button>

      <button
        onClick={() => navigate("#contact")}
        style={{ marginLeft: "10px" }}
      >
        Contact
      </button>

      <div style={{ marginTop: "15px" }}>
        {route === "#home" && <h3>Home Page</h3>}
        {route === "#about" && <h3>About Page</h3>}
        {route === "#contact" && <h3>Contact Page</h3>}
      </div>
    </section>
  );
}

/* =========================================================
   RULES OF HOOKS
   ========================================================= */

function RulesOfHooksExample() {
  return (
    <section>
      <h2>Rules of Hooks</h2>

      <ul>
        <li>Hooks are called only at the top level.</li>
        <li>Hooks are not called inside loops or conditions.</li>
        <li>Hooks are called only inside React functions or custom Hooks.</li>
      </ul>
    </section>
  );
}

/* =========================================================
   useState
   ========================================================= */

function UseStateExample() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h2>useState</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </section>
  );
}

/* =========================================================
   useEffect
   ========================================================= */

function UseEffectExample() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setMessage("Effect executed. Count = " + count);
  }, [count]);

  return (
    <section>
      <h2>useEffect</h2>

      <p>{message}</p>

      <button onClick={() => setCount(count + 1)}>
        Change Count
      </button>
    </section>
  );
}

/* =========================================================
   useContext
   ========================================================= */

const UserContext = createContext();

function UserDisplay() {
  const user = useContext(UserContext);

  return (
    <p>
      Current User: <strong>{user}</strong>
    </p>
  );
}

function UseContextExample() {
  return (
    <section>
      <h2>useContext</h2>

      <UserContext.Provider value="Ashneet Jha">
        <UserDisplay />
      </UserContext.Provider>
    </section>
  );
}

/* =========================================================
   useMemo
   ========================================================= */

function UseMemoExample() {
  const [number, setNumber] = useState(5);

  const square = useMemo(() => {
    return number * number;
  }, [number]);

  return (
    <section>
      <h2>useMemo</h2>

      <p>
        Number: {number}
        <br />
        Square: {square}
      </p>

      <button onClick={() => setNumber(number + 1)}>
        Increase Number
      </button>
    </section>
  );
}

/* =========================================================
   useRef
   ========================================================= */

function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <section>
      <h2>useRef</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something"
      />

      <button
        onClick={focusInput}
        style={{ marginLeft: "10px" }}
      >
        Focus Input
      </button>
    </section>
  );
}

/* =========================================================
   CUSTOM HOOK
   ========================================================= */

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  useDebugValue("Counter: " + count);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return {
    count,
    increment,
    decrement,
  };
}

/* =========================================================
   CUSTOM HOOK USING useDebugValue
   ========================================================= */

function CounterComponent() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <section>
      <h2>Custom Hook + useDebugValue</h2>

      <p>Count: {count}</p>

      <button onClick={increment}>+</button>

      <button
        onClick={decrement}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </section>
  );
}

/* =========================================================
   FINDING AND USING CUSTOM HOOKS
   ========================================================= */

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  useDebugValue(title);
}

function CustomHookUsage() {
  const [name, setName] = useState("React");

  useDocumentTitle(name);

  return (
    <section>
      <h2>Finding and Using Custom Hooks</h2>

      <p>Document title: {name}</p>

      <button onClick={() => setName("React Custom Hook")}>
        Change Document Title
      </button>
    </section>
  );
}

/* =========================================================
   MAIN APP
   ========================================================= */

function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* EXERCISE 1 */}
      <h1>Full Stack Development - React Exercises</h1>

      <p>Hello World - Ashneet Jha</p>

      <hr />

      {/* EXERCISE 2 */}
      <Gallery />

      <hr />

      {/* FUNCTION COMPONENT */}
      <WarningButton />

      <hr />

      {/* EXERCISE 3 */}
      <TodoList />

      <hr />

      {/* EVENT */}
      <SimpleEvent />

      <hr />

      {/* FORMS */}
      <SimpleForm />

      <hr />

      {/* REFS */}
      <SimpleRef />

      <hr />

      {/* STYLING */}
      <StylingExample />

      <hr />

      {/* ROUTING */}
      <RoutingExample />

      <hr />

      {/* RULES OF HOOKS */}
      <RulesOfHooksExample />

      <hr />

      {/* BUILT-IN HOOKS */}
      <UseStateExample />

      <hr />

      <UseEffectExample />

      <hr />

      <UseContextExample />

      <hr />

      <UseMemoExample />

      <hr />

      <UseRefExample />

      <hr />

      {/* CUSTOM HOOKS */}
      <CounterComponent />

      <hr />

      <CustomHookUsage />
    </div>
  );
}

export default App;