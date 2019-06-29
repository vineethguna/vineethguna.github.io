import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import { email } from "@config"
import styled from "styled-components"
import { theme, mixins, media, Section } from "@styles"
import { IconLocation } from "@components/icons"
import MyPic from '@images/me.png'
const { colors, fontSizes, fonts } = theme

const HeroContainer = styled(Section)`
  ${mixins.flexBetween};
  position: relative;
  align-items: flex-start;
  padding-top: 250px;
  min-height: 100vh;
  div {
    width: 100%;
  }
  ${media.tablet`padding-top: 150px;`};
  ${media.tablet`display: block;`};
`

const TextContainer = styled.div`
  width: 60%;
  max-width: 500px;
  ${media.tablet`width: 100%;`};
`;

const Hi = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.medium};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  ${media.desktop`font-size: ${fontSizes.small};`};
  ${media.tablet`font-size: ${fontSizes.smallish};`};
`
const Name = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  margin: 0;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Subtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`font-size: 40px;`};
`
const Blurb = styled.div`
  margin-top: 25px;
  width: 50%;
  max-width: 500px;
  a {
    ${mixins.inlineLink};
  }
`
const Location = styled.div`
  display: inline
  margin-top: 10px;
  color: ${colors.green};
  svg {
    height: 18px;
    width: 18px;
  }
`
const EmailLink = styled.a`
  ${mixins.bigButton};
  margin-top: 50px;
`

const PicContainer = styled.div`
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`

const Avatar = styled.img`
  border-radius: 50%;
`;

const Hero = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const { frontmatter, html } = data[0].node

  const one = () => (
    <Hi style={{ transitionDelay: "100ms" }}>{frontmatter.title}</Hi>
  )
  const two = () => (
    <Name style={{ transitionDelay: "200ms" }}>{frontmatter.name}.</Name>
  )
  const three = () => (
    <Subtitle style={{ transitionDelay: "300ms" }}>
      {frontmatter.subtitle}
    </Subtitle>
  )
  const four = () => (
    <Blurb
      style={{ transitionDelay: "400ms" }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
  const five = () => (
    <Location style={{ transitionDelay: "500ms" }}>
      <IconLocation /> {frontmatter.location}
    </Location>
  )
  const six = () => (
    <div style={{ transitionDelay: "600ms" }}>
      <EmailLink href={`mailto:${email}`}>Get In Touch</EmailLink>
    </div>
  )

  const items = [one, two, three, four, five, six]

  return (
    <HeroContainer>
      <TextContainer>
        <TransitionGroup>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={3000}>
                {item}
              </CSSTransition>
            ))}
        </TransitionGroup>
      </TextContainer>
      <CSSTransition in={isMounted} classNames="fadeup" timeout={3000}>
        <PicContainer style={{ transitionDelay: "800ms" }} className="fadeup-enter">
          <Avatar src={MyPic} />
        </PicContainer>
      </CSSTransition>
    </HeroContainer>
  )
}

Hero.propTypes = {
  data: PropTypes.array.isRequired,
}

export default Hero
