//Variables

export const input = document.getElementById("user-search")
export const form = document.querySelector(".form")
export const profileDetails = document.querySelector(".profile-details")
export const overview_parent = document.querySelector(".content-overview")
export const overview = document.querySelector(".overview")
export const repo = document.querySelector(".content-repo")
export const repo_count = document.getElementById("repo-count")
export const contribution_bd = document.querySelector(".contribution-bd")
export const alert = document.querySelector(".alert")
export const alertParent = document.querySelector(".alert-parent")
export const first_radio = document.querySelector(".first-radio")
export const second_radio = document.querySelector(".second-radio")
export const api = {
    user: "https://api.github.com/users/",
    repos: "/repos",
    contribution: "https://ghchart.rshah.org/"
}