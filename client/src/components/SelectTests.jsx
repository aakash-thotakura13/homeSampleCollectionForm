
import { useState } from "react";

import { testData } from "../database";
import { Heading } from "./common/Heading";

export const SelectTests = ({ onSubmit }) => {

  const [selectedTests, setSelectedTests] = useState([]);
  const [search, setSearch] = useState("");

  const handleClick = test => {
    const isSelected = selectedTests.some(t => t.testName === test.testName);
    if (isSelected) {
      setSelectedTests(prev => prev.filter(t => t.testName !== test.testName));
    } else {
      setSelectedTests(prev => [...prev, test]);
    }
  };

  const removeTest = testName => {
    setSelectedTests(prev => prev.filter(t => t.testName !== testName));
  }

  const total = selectedTests.reduce((acc, test) => acc + test.price, 0);

  const filteredTests = testData.filter(test => test.testName.toLowerCase().includes(search.toLowerCase()));

  const handleContinue = () => {
    onSubmit(selectedTests);
  };

  return (
    <fieldset>

      <Heading title="Select Tests" />

      <span style={{ display: "grid" }}>
        <input
          type="text"
          placeholder="Search Tests..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ marginBottom: "1rem", padding: "0.5rem", maxWidth: "100%" }}
        />
      </span>

      <div
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "0.25rem 0.125rem",
          marginBottom: "1rem",
        }}
      >
        {
          filteredTests.map((test, id) => {

            const isSelected = selectedTests.some(t => t.testName === test.testName);

            return (
              <div
                key={id}
                onClick={() => handleClick(test)}
                style={{
                  backgroundColor: isSelected ? "#76AF4488" : "#fff",
                  padding: "0.7rem 0.35em",
                  borderBottom: "1px solid #ccc",
                  borderRadius: isSelected ? "5px" : "0px",
                  display: "grid",
                  gridTemplateColumns: "1fr 0.2fr",
                  alignItems: "center",
                }}>
                <span style={{ textAlign: "left", }}>{test.testName}</span>
                <span style={{ textAlign: "right" }}>₹ {test.price}/-</span>
              </div>
            )
          })
        }
      </div>

      <Heading title="Cart" />
      {selectedTests.map((test, idx) => (
        <li key={idx} style={{ display: "grid", gridTemplateColumns: "1fr 0.2fr 0.1fr", alignItems: "center", placeContent: "center", padding: "0.5rem 0.25rem", borderBottom: "1px solid #ccc" }}>
          <span>{test.testName}</span>
          <span>₹{test.price}</span>
          <span style={{ fontSize: "0.6rem", }} onClick={() => removeTest(test.testName)}>❌</span>
        </li>
      ))}

      <p style={{ display: "flex", justifyContent: "space-between", padding: "0.5rem 0.25rem", borderBottom: "1px solid #ccc", backgroundColor: "#fed888", }}>
        <span>Total: </span>
        <span>{`₹ ${total}/-`}</span>
      </p>

      <button onClick={handleContinue}>Save & Continue</button>

    </fieldset>
  )
};