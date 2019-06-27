import React from "react"
import PropTypes from "prop-types"
import {
  IconGithub,
  IconLinkedin,
  IconCodepen,
  IconInstagram,
  IconTwitter,
  IconStackOverflow,
  IconMail,
  IconFacebook,
  IconLocation,
} from "@components/icons"

const FormattedIcon = ({ name }) => {
  switch (name) {
    case "Github":
      return <IconGithub />
    case "Linkedin":
      return <IconLinkedin />
    case "Codepen":
      return <IconCodepen />
    case "StackOverflow":
      return <IconStackOverflow />
    case "Facebook":
      return <IconFacebook />
    case "Mail":
      return <IconMail />
    case "Instagram":
      return <IconInstagram />
    case "Twitter":
      return <IconTwitter />
    default:
      return <IconGithub />
  }
}

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default FormattedIcon
