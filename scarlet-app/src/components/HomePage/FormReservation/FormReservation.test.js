import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { configure, mount } from "enzyme";

import renderer from "react-test-renderer";

import FormReservation from "./FormReservation";
import HomePage from "../HomePage";

configure({ adapter: new Adapter() });

describe("<FormReservation />", () => {
  test("Matches the snapshot", () => {
    const tree = renderer.create(<FormReservation />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

it("Starts with a count of 0 for the number of passengers", () => {
  const wrapper = mount(<HomePage />);
  const text = wrapper.find(".counter-value").text();
  expect(text).toEqual("0");
});

it("Increments count by 1 on increment button click", () => {
  const wrapper = mount(<HomePage />);
  const incrementButton = wrapper.find(".increment-button");
  incrementButton.simulate("click");
  const text = wrapper.find(".counter-value").text();
  expect(text).toEqual("1");
});

it("Does not have a value under 1 on decrement click", () => {
  const wrapper = mount(<HomePage />);
  const incrementButton = wrapper.find(".increment-button");
  incrementButton.simulate("click");
  incrementButton.simulate("click");
  const decrementButton = wrapper.find(".decrement-button");
  decrementButton.simulate("click");
  decrementButton.simulate("click");
  decrementButton.simulate("click");
  decrementButton.simulate("click");
  const text = wrapper.find(".counter-value").text();
  expect(text).toEqual("1");
});

it('Submit button has class "input-disabled" if the fields are empty', () => {
  const wrapper = mount(<HomePage />);
  const submitButton = wrapper.find(".submitInput");
  expect(submitButton.prop("className")).toEqual("submitInput input-disabled");
});
