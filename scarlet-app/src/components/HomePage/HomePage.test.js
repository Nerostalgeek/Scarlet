import React from "react";

import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

import HomePage from "./HomePage";
import FormReservation from "./FormReservation/FormReservation";

configure({ adapter: new Adapter() });

describe("<HomePage />", () => {
  it("The Homepage renders the Form Reservation correctly", () => {
    const wrapper = mount(<HomePage />);
    console.log(wrapper.debug());
    expect(wrapper.find(FormReservation).length).toEqual(1);
  });
});
