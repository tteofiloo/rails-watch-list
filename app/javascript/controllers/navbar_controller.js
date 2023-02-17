import { Controller } from "@hotwired/stimulus"
import NavbarController from "./navbar_controller.js"
application.register("navbar", NavbarController)

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }
}
