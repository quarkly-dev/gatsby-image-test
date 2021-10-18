import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Structure, Image, Span, Input, Icon, Button } from "@quarkly/widgets";
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowRight } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Structure cells-number-total="2" quarkly-title="Header" padding="38px 0px 38px 0px">
			<Override slot="Content" grid-template-columns="2fr 3fr">
				<Override slot="cell-0">
					<Link href="/" display="flex" text-decoration-line="initial" hover-opacity=".8">
						<Text font="normal 700 14px/1.5 --fontFamily-googleFiraSans" color="#1064C7" transform="rotate(-90deg)" margin="0px 0px 0px 0px">
							b2b
						</Text>
						<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
							e-Platform
						</Text>
					</Link>
				</Override>
				<Override slot="cell-1">
					<Components.QuarklycommunityKitMobileSidePanel md-justify-content="flex-end">
						<Override slot="Children" display="flex" />
						<Override slot="Content" padding="0px 0px 0px 0px" md-margin="38px 0px 0px 0px" />
						<Override slot="Button Text" md-font="--lead" md-text-transform="uppercase" sm-margin="3px 6.3px 0px 0px" />
						<Box
							display="flex"
							justify-content="flex-end"
							md-align-items="center"
							md-flex-direction="column"
							md-justify-content="center"
							md-padding="20px 0px 20px 0px"
							md-margin="0px 0px 0px 0px"
						>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--dark"
								font="--base"
								padding="5px 10px 5px 10px"
								margin="0px 15px 0px 15px"
								transition="opacity 0.3s ease-in-out 0s"
								hover-opacity=".8"
							>
								Solutions
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--dark"
								font="--base"
								padding="5px 10px 5px 10px"
								margin="0px 15px 0px 15px"
								transition="opacity 0.3s ease-in-out 0s"
								hover-opacity=".8"
							>
								Products
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--dark"
								font="--base"
								padding="5px 10px 5px 10px"
								margin="0px 15px 0px 15px"
								transition="opacity 0.3s ease-in-out 0s"
								hover-opacity=".8"
							>
								Pricing
							</Link>
							<Link
								href="#"
								text-decoration-line="initial"
								color="--dark"
								font="--base"
								padding="5px 10px 5px 10px"
								margin="0px 0px 0px 15px"
								transition="opacity 0.3s ease-in-out 0s"
								hover-opacity=".8"
							>
								Testimonial
							</Link>
						</Box>
					</Components.QuarklycommunityKitMobileSidePanel>
				</Override>
			</Override>
		</Structure>
		<Structure cells-number-total="2" quarkly-title="HeroBlock" padding="0px 0px 0px 0px" background="--color-darkL1">
			<Override
				slot="Content"
				lg-grid-gap="32px"
				md-grid-template-columns="1fr"
				md-grid-gap="0px"
				md-margin="0px 0px 0px 0px"
				md-width="100%"
			>
				<Override slot="cell-0">
					<Box display="flex" flex-direction="column" width="70%" lg-width="100%">
						<Text margin="0px 0px 0px 0px" font="--headline3" color="--light" sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif">
							B2B Matchmaking Has Never Been Easier
						</Text>
						<Text margin="32px 0px 0px 0px" font="--lead" color="--light" md-padding="0px 0px 40px 0px">
							Targeted dialogues between customers and merchants based on their profiles and preferences will redefine networking.
						</Text>
					</Box>
					<Components.QuarklycommunityKitPopup>
						<Override
							slot="Button Open"
							color="--light"
							background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right.svg?v=2021-09-16T22:08:39.193Z) 100% -5px/contain no-repeat"
							height="40px"
							transition="opacity 0.3s ease-in-out 0s"
							hover-opacity="0.8"
							padding="3px 40px 5px 0px"
							font="--headline4"
							opacity="1"
							lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
						>
							Watch Demo
						</Override>
						<Override slot="Wrapper" display="block" width="80%" />
						<Override slot="Button Close" size="40px" transition="transform 0.3s ease-in-out 0s" hover-transform="rotateZ(180deg)" />
						<Components.QuarklycommunityKitYouTube url="https://www.youtube.com/watch?v=N3EFqbc2RHc" height="100%" />
					</Components.QuarklycommunityKitPopup>
				</Override>
				<Override slot="cell-1">
					<StaticImage src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="A dinosaur" />
				</Override>
				<Override
					slot="Cell 0"
					padding="80px 0px 40px 0px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="space-around"
					md-padding="60px 32px 40px 32px"
					sm-padding="60px 16px 40px 16px"
				/>
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="104px 0px 104px 0px" lg-padding="40px 0px 40px 0px" sm-padding="30px 0px 40px 0px">
			<Override slot="Content" grid-gap="32px" lg-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Text margin="0px 0px 0px 0px" font="--headline1" color="--dark" md-font="normal 500 40px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
						Why Choose Us?
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text margin="0px 0px 0px 0px" font="--lead" color="--dark" sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif">
						Our online event management platform provides various services event planners and project managers may need. Manage all your events in a single app. Our event management system has so many features that it's hardly possible to list them all! You can find some of them below.
					</Text>
					<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
						<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
							Before start
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Registration
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Ticketing
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Website building
						</Text>
						<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
							On-site badge printing and session tracking
						</Text>
					</Box>
					<Box width="33.333%" margin="32px 0px 0px 0px" padding="0px 30px 0px 0px" md-width="100%">
						<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
							Planning
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Management of contacts and finances
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							On-site event management
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Lead retrieval
						</Text>
						<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
							Networking solutions
						</Text>
					</Box>
					<Box width="33.333%" margin="32px 0px 0px 0px" md-width="100%">
						<Text margin="0px 0px 16px 0px" font="normal 500 18px/1.5 --fontFamily-googleFiraSans" color="--dark">
							Managment
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Business matchmaking software
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Polls and surveys
						</Text>
						<Text margin="0px 0px 8px 0px" font="--base" color="--dark">
							Powerful AI-assisted analytics system
						</Text>
						<Text margin="0px 0px 0px 0px" font="--base" color="--dark">
							Virtual conference, tradeshows, roundtables, and seminars
						</Text>
					</Box>
				</Override>
				<Override slot="Cell 1" display="flex" flex-direction="row" flex-wrap="wrap" />
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="0px 0px 0px 0px">
			<Override slot="Content" grid-gap="0px" md-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Text margin="0px 0px 0px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						<Span
							font="700 40px/48px &quot;Fira Sans&quot;, sans-serif"
							color="--primary"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							lg-font="700 30px/48px &quot;Fira Sans&quot;, sans-serif"
						>
							b2b
						</Span>
						{" "}e-Platform
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text
						margin="0px 0px 0px 0px"
						font="--headline4"
						color="--light"
						lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
						sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					>
						Great events are created by combining accurate planning and cutting-edge technology. That's why event planners are turning to all-in-one event management software to make virtual, hybrid, or on-site event managing easier.
					</Text>
				</Override>
				<Override slot="Cell 1" background="--color-primary" padding="24px 32px 24px 32px" />
				<Override
					slot="Cell 0"
					display="flex"
					align-items="flex-start"
					justify-content="center"
					flex-direction="column"
					border-width="1px 0px 0px 0px"
					padding="80px 32px 80px 0px"
					border-color="#C4C4C4"
					border-style="solid"
					md-padding="60px 32px 60px 0px"
				/>
			</Override>
		</Structure>
		<Structure cells-number-total="3" cells-number-group="3" padding="0px 0px 0px 0px">
			<Override
				slot="Content"
				grid-template-columns="repeat(4, 3fr)"
				sm-grid-template-columns="12fr"
				grid-gap="0px"
				md-grid-template-columns="1fr"
			>
				<Override
					slot="Cell 0th"
					grid-column="1 / span 2"
					sm-grid-column="auto"
					grid-row="auto / span 2"
					md-grid-row="auto / auto"
					sm-grid-row="auto"
					md-grid-column="auto / auto"
				/>
				<Override
					slot="Cell 1st"
					grid-column="3 / span 2"
					sm-grid-column="auto"
					padding="32px 32px 32px 32px"
					md-grid-column="auto / auto"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					align-items="flex-start"
				/>
				<Override
					slot="Cell 2nd"
					md-grid-column="auto / auto"
					sm-grid-column="auto"
					grid-column="3 / span 2"
					padding="32px 32px 32px 32px"
				/>
				<Override slot="Cell 3rd" md-grid-column="3 / span 2" sm-grid-column="auto" />
				<Override slot="cell-0">
					<StaticImage src="https://images.unsplash.com/photo-1603539947678-cd3954ed515d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="A dinosaur" />
				</Override>
				<Override slot="cell-1">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
						width="60%"
						lg-width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
					>
						Event Registration Software
					</Text>
					<Text
						margin="0px 0px 65px 0px"
						font="--base"
						color="--dark"
						width="70%"
						lg-width="100%"
					>
						Facilitate event ticketing and registration with an easy-to-navigate event registration page that is responsive on all devices.
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
					</Link>
				</Override>
				<Override slot="cell-2">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
						width="80%"
						lg-width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
					>
						Business Matchmaking Platform
					</Text>
					<Text
						margin="0px 0px 65px 0px"
						font="--base"
						color="--dark"
						width="70%"
						lg-width="100%"
					>
						Connect customers with a well-curated list of businesses to make event networking more effective.
					</Text>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
					</Link>
				</Override>
				<Override
					slot="Cell"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					align-items="flex-start"
				/>
				<Override slot="Cell 1" max-height="316px" lg-height="316px" />
				<Override slot="Cell 2" max-height="316px" height="316px" />
				{"                                    "}
			</Override>
		</Structure>
		<Structure cells-number-total="4" padding="64px 0px 0px 0px" lg-padding="32px 0px 32px 0px">
			<Override slot="Content" grid-template-columns="repeat(3, 1fr)" grid-gap="0px" lg-grid-template-columns="1fr">
				<Override slot="Cell 0" grid-column="1 / span 3" />
				<Override slot="cell-0">
					<Text margin="0px 0px 16px 0px" font="--headline2" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
						On-site{" "}
						<Span
							color="--primary"
							font="700 50px/60px &quot;Fira Sans&quot;, sans-serif"
							lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Event
						</Span>
						{" "}Management
					</Text>
					<Text
						margin="0px 0px 32px 0px"
						font="--lead"
						color="--dark"
						width="60%"
						lg-width="100%"
						sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						lg-margin="0px 0px 16px 0px"
					>
						Arrange enticing hybrid or on-site events with contactless signups, check-ins, and badge printing.
					</Text>
				</Override>
				<Override slot="cell-1">
					<Box>
						<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
							AI — Based
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							lg-margin="0px 0px 45px 0px"
						>
							Let participants have pre-scheduled 1-1 meetings at the event either in-person or virtually.
						</Text>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
					</Link>
				</Override>
				<Override slot="cell-2">
					<Box>
						<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
							On-Site Events
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							lg-margin="0px 0px 45px 0px"
						>
							End-to-end event management software that improves the attendance experience and ensures that in-person events run smoothly.
						</Text>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Learn more
					</Link>
				</Override>
				<Override slot="cell-3">
					<Box>
						<Text margin="15px 0px 16px 0px" font="--headline4" color="--dark">
							Diversity Events
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							sm-margin="0px 0px 4px 0px"
							lg-margin="0px 0px 45px 0px"
						>
							Arrange diversity and inclusive events.
						</Text>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						Watch Demo
					</Link>
				</Override>
				<Override
					slot="Cell"
					min-height="320px"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					align-items="flex-start"
					padding="16px 32px 60px 16px"
					lg-min-height="16px"
				/>
				<Override
					slot="Cell 1"
					border-width="1px 1px 1px 0px"
					border-style="solid"
					border-color="--color-grey"
					lg-border-width="0px"
				/>
				<Override
					slot="Cell 2"
					border-width="1px 1px 1px 0px"
					border-color="--color-grey"
					border-style="solid"
					lg-border-width="0px"
				/>
				<Override
					slot="Cell 0th"
					lg-grid-column="auto / auto"
					lg-border-width="0px"
					lg-padding="16px 0px 16px 0px"
					lg-margin="0px 0px 20px 0px"
				/>
				<Override slot="Cell 3" border-width="1px 0px 1px 0px" border-style="solid" border-color="--color-grey" />
			</Override>
		</Structure>
		<Structure padding="0px 0px 0px 0px" cells-number-total="1">
			<Override slot="Content">
				<Override slot="cell-0">
					<Components.Tabs
						defaultTab="one"
						display="flex"
						flex-direction="row-reverse"
						width="100%"
						md-flex-wrap="wrap"
						margin="0px 0px -4px 0px"
					>
						<Override
							slot="Tablist"
							width="25%"
							flex-direction="column"
							padding="16px 16px 16px 24px"
							lg-width="40%"
							md-width="100%"
							md-padding="0px 16px 0px 0px"
							md-position="absolute"
							md-align-items="flex-start"
						/>
						<Override slot="TabPanels" width="75%" lg-width="60%" md-width="100%" />
						<Override
							slot="Tab"
							padding="16px 6px 16px 6px"
							text-align="left"
							background="rgba(32, 108, 236, 0)"
							color="--dark"
							font="--headline4"
							transition="transform 1s ease 0s"
							transform="translateX(0px)"
							opacity="0.5"
							margin="0px 0px 40px 0px"
							md-background="--color-light"
							md-opacity="1"
							md-margin="0px 0px 0px 0px"
							md-width="30%"
							md-border-radius="0px"
							md-border-width="0px 0px 1px 0px"
							md-border-style="solid"
							sm-width="50%"
							sm-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
							md-font="normal 400 22px/1.3 &quot;Fira Sans&quot;, sans-serif"
						/>
						<Override slot="Tab :active" transform="translateX(0px)" opacity="1" />
						<Override slot="Tab two">
							User-Friendly
						</Override>
						<Override slot="Tab three">
							Customizable
						</Override>
						<Override slot="Tab four" margin="0px 0px 20px 0px">
							Effective
						</Override>
						<Override slot="Tab one">
							Cost-Effective
						</Override>
						<Components.Tab tabId="one">
							<Override slot="Tab two">
								Animation
							</Override>
							<StaticImage src="https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="A dinosaur" />
						</Components.Tab>
						<Components.Tab tabId="two">
							<StaticImage src="https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000" alt="A dinosaur" />
						</Components.Tab>
						<Components.Tab tabId="three">
							<StaticImage src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000" alt="A dinosaur" />
						</Components.Tab>
						<Components.Tab tabId="four">
							<StaticImage src="https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000" alt="A dinosaur" />
						</Components.Tab>
					</Components.Tabs>
				</Override>
				<Override slot="Cell 0th" md-position="relative" />
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="0px 0px 0px 0px">
			<Override
				slot="Content"
				grid-gap="0px"
				grid-template-columns="75% 25%"
				lg-grid-template-columns="60% 40%"
				md-grid-template-columns="1fr"
			>
				<Override slot="cell-0">
					<Text
						margin="0px 0px 0px 0px"
						font="--headline2"
						color="--dark"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						md-padding="32px 0px 32px 0px"
					>
						Event Management
						<br />
						Software{" "}
						<Span color="--primary" font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
							Pricing
						</Span>
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--light"
						width="100%"
						lg-font="normal 400 24px/1.3 &quot;Fira Sans&quot;, sans-serif"
					>
						Bring Your Events Together
					</Text>
					<Text margin="0px 0px 16px 0px" font="--base" color="--light" width="100%">
						No long-term commitments, setup fees, cancellation fees, or hidden fees.
					</Text>
				</Override>
				<Override slot="Cell 1" background="--color-primary" padding="32px 32px 79px 32px" md-padding="32px 16px 32px 16px" />
				<Override slot="Cell 0" align-self="center" />
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="0px 0px 0px 0px" lg-padding="0px 0px 0px 0px">
			<Override slot="Content" grid-gap="0px" lg-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Box margin="0px 0px 54px 0px">
						<Text margin="15px 0px 16px 0px" font="--headline3" color="--dark" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
							Standard
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							128gb SSD storage
						</Text>
						<Text
							margin="0px 0px 8px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Full UI kit download
						</Text>
						<Text
							margin="0px 0px 0px 0px"
							font="--lead"
							color="--dark"
							width="100%"
							sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
						>
							Public API
						</Text>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						From $29
					</Link>
				</Override>
				<Override slot="cell-1">
					<StaticImage src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/Vectary%20texture.png?v=2021-09-18T00:09:23.228Z" alt="A dinosaur" />
					<Box
						margin="0px 0px 54px 0px"
						display="flex"
						width="100%"
						flex-wrap="wrap"
						sm-flex-direction="column"
					>
						<Text
							margin="15px 0px 16px 0px"
							font="--headline3"
							color="--dark"
							width="100%"
							lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						>
							Advanced
						</Text>
						<Box width="50%" sm-width="100%">
							<Text
								margin="0px 0px 8px 0px"
								font="--lead"
								color="--dark"
								width="100%"
								sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							>
								256gb SSD storage
							</Text>
							<Text
								margin="0px 0px 8px 0px"
								font="--lead"
								color="--dark"
								width="100%"
								sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							>
								Full UI kit download
							</Text>
							<Text
								margin="0px 0px 0px 0px"
								font="--lead"
								color="--dark"
								width="100%"
								sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							>
								Public API
							</Text>
						</Box>
						<Box width="50%" sm-width="100%">
							<Text
								margin="0px 0px 8px 0px"
								font="--lead"
								color="--dark"
								width="100%"
								sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							>
								Full UI pack download
							</Text>
							<Text
								margin="0px 0px 8px 0px"
								font="--lead"
								color="--dark"
								width="100%"
								sm-font="normal 400 16px/1.5 &quot;Fira Sans&quot;, sans-serif"
							>
								24/7 support
							</Text>
						</Box>
					</Box>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--primary"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_blue.svg?v=2021-09-16T22:45:08.539Z) 100% -5px/contain no-repeat"
						font="--lead"
					>
						From $39
					</Link>
				</Override>
				<Override
					slot="Cell 1"
					position="relative"
					display="flex"
					flex-wrap="wrap"
					border-width="1px 0px 1px 0px"
					border-style="solid"
					border-color="--color-grey"
					lg-border-width="0px"
				/>
				<Override slot="Cell" padding="16px 32px 65px 32px" />
				<Override
					slot="Cell 0"
					border-width="1px 1px 1px 0px"
					border-style="solid"
					border-color="--color-grey"
					lg-border-width="0px"
				/>
				<Override slot="Cell 0th" flex-direction="column" justify-content="space-between" align-items="flex-start" />
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="0px 0px 0px 0px">
			<Override
				slot="Content"
				grid-gap="0px"
				lg-grid-template-columns="1fr"
				sm-margin="0px 0px 0px 0px"
				sm-width="100%"
			>
				<Override slot="cell-0">
					<Box display="flex" flex-direction="column" width="80%" lg-width="100%">
						<Text
							margin="0px 0px 0px 32px"
							font="--headline3"
							color="--light"
							sm-font="400 36px/1.2 &quot;Fira Sans&quot;, sans-serif"
							lg-text-align="center"
							lg-margin="0px 0px 0px 0px"
						>
							Testimonials
						</Text>
						<Box padding="32px 35px 32px 32px" margin="32px 0px 0px 0px" background="--color-darkL2">
							<Text font="--lead" color="--light" margin="0px 0px 0px 0px" lg-text-align="center">
								We liked the software's flexibility to adapt to our evolving requirements. For example, being able to create promo codes to provide conference participants with various discounts.
							</Text>
						</Box>
					</Box>
				</Override>
				<Override slot="Cell 0th" sm-padding="64px 16px 164px 16px" />
				<Override
					slot="Cell 0"
					background="--color-dark"
					padding="64px 32px 257px 0px"
					lg-padding="64px 64px 64px 64px"
					sm-padding="32px 32px 32px 32px"
				/>
				<Override slot="cell-1">
					<Link
						href="#"
						text-decoration-line="initial"
						color="--light"
						padding="5px 85px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right.svg?v=2021-09-16T22:08:39.193Z) 100% -12px/51px no-repeat"
						font="--headline3"
						sm-padding="5px 55px 5px 0px"
						sm-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
					>
						Our Clients Say...
					</Link>
				</Override>
				<Override slot="Cell 1" padding="64px 32px 0px 32px" lg-padding="164px 32px 164px 32px" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1543269665-7821011040ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80) 0% 40% /cover repeat scroll padding-box" />
			</Override>
		</Structure>
		<Structure cells-number-total="2" padding="0px 0px 0px 0px">
			<Override
				slot="Content"
				grid-template-columns="75% 25%"
				grid-gap="0px"
				lg-grid-template-columns="60% 40%"
				md-grid-template-columns="1fr"
			>
				<Override slot="Cell 0" padding="80px 32px 80px 0px" md-padding="32px 0px 32px 0px" />
				<Override
					slot="Cell 1"
					padding="42px 32px 42px 32px"
					border-width="0px 0px 0px 1px"
					border-style="solid"
					border-color="--color-grey"
					md-border-width="0px"
					md-padding="32px 0px 0px 0px"
				/>
				<Override slot="cell-0">
					<Text
						margin="0px 0px 0px 0px"
						font="--headline2"
						color="--dark"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						width="80%"
						lg-width="100%"
					>
						Experience a{" "}
						<Span font="700 50px/60px &quot;Fira Sans&quot;, sans-serif" color="--primary" lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif">
							platform
						</Span>
						{" "}created to run high-quality events better than anyone!
					</Text>
				</Override>
				<Override slot="cell-1">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
						width="100%"
						text-align="center"
						md-margin="0px 0px 32px 0px"
						md-text-align="left"
					>
						Our Partners
					</Text>
					<Components.QuarklycommunityKitCarousel
						showHead={false}
						showLink={false}
						showText={false}
						autoPlayIntervalProp="5s"
						autoPlay
						showDots={false}
						slidesProp="5"
						aspectRatio="auto"
						md-padding="0px 0px 48% 0px"
						overflow-y="hidden"
						height="150px"
						md-overflow-x="visible"
						md-overflow-y="visible"
						md-width="70%"
					>
						<Override slot="Slide Image 1" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/cola.svg?v=2021-09-21T00:03:54.451Z" />
						<Override slot="Slide Image 2" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/pepsi.svg?v=2021-09-21T00:03:54.442Z" />
						<Override slot="Slide Image 3" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/nike.svg?v=2021-09-21T00:03:54.436Z" />
						<Override slot="Arrow" background="none" md-display="none" align-items="flex-end" />
						<Override
							slot="Arrow Icon"
							color="--primary"
							border-color="#206CEC"
							border-width="1px"
							border-style="solid"
							border-radius="100%"
							size="38px"
						/>
						<Override slot="Slide Image" md-height="auto" />
						<Override slot="Slide Image 4" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/logitech.svg?v=2021-09-21T00:03:54.432Z" />
						<Override slot="Slide Image 5" src="https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/samsung.svg?v=2021-09-21T00:03:54.449Z" />
						<Override slot="Arrow Prev" background="none" />
						<Override slot="Arrow Next" background="none" />
					</Components.QuarklycommunityKitCarousel>
				</Override>
			</Override>
		</Structure>
		<Structure quarkly-title="Footer" padding="0px 0px 48px 0px">
			<Override slot="Content" grid-gap="0px" lg-grid-template-columns="1fr">
				<Override slot="cell-0">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--light"
						lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
						sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					>
						Contact info
					</Text>
					<Text
						margin="0px 0px 16px 0px"
						font="--lead"
						color="--light"
						lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
						sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					>
						355 Saint Rose Avenue 22, Suite #2221, Nordway, FL 355523, USA
					</Text>
					<Link
						href="tel:12345678"
						text-decoration-line="initial"
						color="--light"
						font="--lead"
						margin="0px 0px 16px 0px"
					>
						+1 (850) 839-5995
					</Link>
					<Link
						href="mailto:info@b2bpltfrm.com"
						text-decoration-line="initial"
						color="--light"
						font="--lead"
						margin="0px 0px 32px 0px"
					>
						info@b2bpltfrm.com
					</Link>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--light"
						lg-font="normal 400 20px/1.3 &quot;Fira Sans&quot;, sans-serif"
						sm-font="normal 400 18px/1.4 &quot;Fira Sans&quot;, sans-serif"
					>
						Follow us
					</Text>
					<SocialMedia margin="0px 0px 0px 0px" justify-content="flex-start" facebook="https://www.facebook.com/quarklyapp" linked-in="https://linkedin.com/">
						<Override
							slot="link"
							border-radius="50%"
							color="--grey"
							hover-color="--light"
							hover-background="transparent"
							margin="0 5px 0 5px"
							padding="5x 5px 5px 5px"
							width="36px"
							height="36px"
							display="flex"
							align-items="center"
							justify-content="center"
							background="none"
						/>
						<Override
							slot="icon"
							color="--light"
							padding="7px 7px 7px 7px"
							border-width="0px"
							size="34px"
							border-radius="50px"
						/>
						<Override slot="link-facebook" margin="0px 5px 0px 0px">
							<div />
						</Override>
					</SocialMedia>
				</Override>
				<Override
					slot="Cell 0"
					padding="32px 64px 64px 32px"
					background="--color-primary"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				/>
				<Override slot="cell-1">
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
						font="--headline4"
						margin="0px 0px 27px 0px"
					>
						About Us
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
						font="--headline4"
						margin="0px 0px 27px 0px"
					>
						Help
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
						font="--headline4"
						margin="0px 0px 27px 0px"
					>
						FAQ
					</Link>
					<Link
						href="#"
						text-decoration-line="initial"
						color="--dark"
						padding="5px 35px 5px 0px"
						background="url(https://uploads.quarkly.io/6143a05129a0a1001e6c835c/images/keyboard_arrow_right_black.svg?v=2021-09-18T00:53:14.815Z) 100% 0px/30px no-repeat"
						font="--headline4"
						margin="0px 0px 27px 0px"
						lg-margin="0px 0px 0px 0px"
					>
						Blog
					</Link>
				</Override>
				<Override
					slot="Cell 1"
					padding="32px 32px 32px 32px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				/>
				<Override
					slot="Cell 2"
					padding="32px 64px 32px 32px"
					border-width="1px 0px 0px 0px"
					border-style="solid"
					border-color="--color-grey"
				/>
				<Override slot="cell-2">
					<Text
						margin="0px 0px 16px 0px"
						font="--headline4"
						color="--dark"
						lg-font="400 30px/1.2 &quot;Fira Sans&quot;, sans-serif"
						sm-font="400 22px/1.2 &quot;Fira Sans&quot;, sans-serif"
					>
						Subscribe to our newsletter and updates
					</Text>
					<Components.QuarklycommunityKitNetlifyForm
						border-width="0px 0px 1px 0px"
						border-style="solid"
						border-color="--color-grey"
						width="240px"
						md-width="360px"
						sm-width="100%"
					>
						<Override slot="Form" align-items="center" display="flex" justify-content="center" />
						<Box display="flex" align-items="center" justify-content="flex-start">
							<Input
								placeholder="Type your email here..."
								name="Email"
								required
								type="email"
								padding="6px 16px 6px 0px"
								border-color="--color-grey"
								border-width="0px"
								border-style="none"
								md-width="100%"
							/>
							<Button color="transparent" background="transparent" font="normal 400 0px/1.5 &quot;Fira Sans&quot;, sans-serif">
								<Icon category="md" icon={MdKeyboardArrowRight} color="--dark" />
								Button
							</Button>
						</Box>
					</Components.QuarklycommunityKitNetlifyForm>
				</Override>
			</Override>
		</Structure>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"616d6ba390c15f001ede4c69"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
