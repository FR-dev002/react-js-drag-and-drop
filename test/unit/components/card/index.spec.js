import React from "react";
import {mount} from "enzyme";
import CardComponent from "../../../../src/components/card";

describe("Card Component", () => {
	it("Set title card, dari parameter yang dikirim dari compoennt yang menggunakan", () => {
		const wrapper = mount(<CardComponent title={"card-title"} />);
		wrapper.find('[data-test="card-title"]');
		expect(wrapper.text()).toEqual("card-title");
	});

	it("Set children card, dari parameter yang dikirim dari compoennt yang menggunakan", () => {
		const children = <p data-test="card-children">Testing children</p>;
		const wrapper = mount(<CardComponent children={children} />);
		wrapper.find('[data-test="body-title"]').find('[data-test="card-children"]');
		expect(wrapper.text()).toEqual("Testing children");
	});
});
