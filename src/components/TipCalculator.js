import { useState } from "react";

export default function TipCalculator() {
  const [form, setForm] = useState({
    bill: "",
    youLike: "",
    friendLikes: "",
  });

  const bill = Number(form.bill);
  // when we don't use value of option of select
  // const regex = /\d+/;
  // const avarageOfTip =
  //   (bill *
  //     (Number(form.youLike.match(regex)) +
  //       Number(form.friendLikes.match(regex)))) /
  //   2 /
  //   100;
  // const pay = bill + avarageOfTip;
  // ***********************************************

  // when we  use value of option of select
  const tip =
    (bill * ((Number(form.youLike) + Number(form.friendLikes)) / 2)) / 100;
  const pay = bill + tip;

  function handleClick() {
    setForm({ bill: "", youLike: "", friendLikes: "" });
  }

  return (
    <div className="container">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Form form={form} setForm={setForm} />
        <p
          style={{
            gridColumn: "1/-1",
            justifySelf: "center",
            fontSize: "28px",
          }}
        >
          You pay ${pay} (${bill} + ${tip} tip)
        </p>
        <button
          style={{
            padding: "10px 20px",
            background: "#CBC1C1",
            borderRadius: "20px",
            fontSize: "18px",
            gridColumn: "1/-1",
            justifySelf: "end",
          }}
          onClick={handleClick}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

function Form({ form, setForm }) {
  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <>
      <label>How much was the bill?</label>
      <input
        name="bill"
        value={form.bill}
        onChange={handleChange}
        type="text"
        style={{
          padding: "10px 20px",
          background: "#CBC4C1",
          borderRadius: "20px",
          fontSize: "18px",
        }}
      />
      <label>How did you like the service?</label>
      <select name="youLike" value={form.youLike} onChange={handleChange}>
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was amazing!(20%)</option>
      </select>
      <label>How did your friend like the service?</label>
      <select
        name="friendLikes"
        value={form.friendLikes}
        onChange={handleChange}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">It was amazing!(20%)</option>
      </select>
    </>
  );
}
