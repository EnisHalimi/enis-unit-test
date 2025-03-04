import { expect, it } from 'vitest'
import { mount } from "@vue/test-utils"
import HelloWorld from "./HelloWorld.vue"

it("should render message property", () => {
    const instance = mount(HelloWorld, {
        props: {
            msg: "My first test"
        }
    })

    expect(instance.find("h1").text()).toContain("My first test")
})
