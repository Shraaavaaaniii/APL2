import './App.css'
import styles from './module.style.css'
function Registration(){
  return (
    <div>
      {/* css stylesheet */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        aliquid excepturi temporibus sunt, fugiat iusto enim neque itaque
        assumenda dolores cupiditate accusantium dolore perferendis!
        Perspiciatis eius ad enim dolor provident? Facilis error animi veniam
        eum numquam sequi ratione nesciunt alias officiis quasi aspernatur
        dolorum, a laudantium fugit quisquam, delectus quis omnis? Inventore,
        quo atque sit quisquam quaerat obcaecati laudantium minus. Ullam
        nesciunt asperiores assumenda odit! Enim animi doloribus mollitia autem
        quas dignissimos. Consequatur eveniet porro ea eius a rem, obcaecati aut
        molestias sunt? Velit, alias asperiores? Culpa quis in nulla?
      </p>
      {/* inline css */}
      <h1 style={{ color: "red", backgroundColor: "yellow" }}>Hello there!</h1>
      {/* css module */}
      <ol className={{styles}}>
        <li>Java</li>
        <li>C++</li>
        <li>Python</li>
      </ol>
    </div>
  );
}

export default Registration;