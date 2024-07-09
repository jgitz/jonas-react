import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {

  const [clickFlag, setClickFlag] = useState(null);

  function handleToggle(number) {
    // setIsOpen((value) => !value);
     clickFlag===number? setClickFlag(null): setClickFlag(number)
  }


  return (
    <div className="accordion">
      {faqs.map((item, i) => {
        return (
          <>
            {/* <AccordionItem number={i + 1} title={item.title} content={item.text} key={item.title} /> */}

            <AccordionItem number={i + 1} title={item.title} key={item.title} onToggle={handleToggle} clickFlag={clickFlag}>
              {" "}
              {item.text}{" "}
            </AccordionItem>
          </>
        );
      })}

      {/* CUSTOM ACCORDION ITEM BELOW */}

      <AccordionItem number={25} title="CUSTOM TITLE" key="CUSTOM TITLE" onToggle={handleToggle} clickFlag={clickFlag}>
        Custom accordion item.... this don't take value from teh faq array
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ number, title, onToggle, clickFlag, children }) {
  // const [isOpen, setIsOpen] = useState(false);

  // function handleToggle(number) {
  //   setIsOpen((value) => !value);

  // }

  // const [clickFlag, setClickFlag] = useState(null)

  return (
    <div className={`item ${clickFlag === number ? "open" : ""}`} onClick={() => onToggle(number)}>
      <p className="number">{number < 9 ? `0${number}` : number}</p>
      <p className="title">{title}</p>
      <p className="icon">{clickFlag===number? '-': '+'}</p>
      {clickFlag === number && <div className="content-box">{children}</div>}
    </div>
  );
}
