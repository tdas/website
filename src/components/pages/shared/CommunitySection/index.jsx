import * as React from "react";
import Grid from "src/components/Grid";
import Typography from "src/components/Typography";
import styled from "styled-components";
import Link from "src/components/Link";
import LakeSection from "../LakeSection";
import slack from "./logos/slack.png";
import googleGroups from "./logos/google-groups.png";
import youtube from "./logos/youtube.png";

const communities = [
  {
    logo: slack,
    name: "Slack Channel",
    url: "#",
  },
  {
    logo: googleGroups,
    name: "Google Group",
    url: "#",
  },
  {
    logo: youtube,
    name: "YouTube",
    url: "#",
  },
];

const CommunityGrid = styled(Grid)`
  justify-content: center;
`;

const CommunityTile = styled(Link)`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.primary};
  background-color: white;
  padding: ${(props) => props.theme.spacing.lg};
  text-align: center;
  color: inherit;
  text-decoration: none;
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.light.color};
  width: 160px;
  transition: transform 250ms ease-out;
  margin-left: auto;
  margin-right: auto;

  img {
    display: block;
    width: 100%;
    height: auto;
    max-width: 65px;
    margin-bottom: ${(props) => props.theme.spacing.md};
  }

  &:hover {
    transform: scale(1.02);
  }
`;

const CommunitySection = () => (
  <LakeSection
    title="Join the Delta Lake Community"
    subtitle={
      <Typography variant="p">
        Communicate with fellow Delta Lake users and contributors, ask questions
        and share tips.
      </Typography>
    }
    padding="xxxl"
    centeredHeader
  >
    <CommunityGrid
      columns={{
        xs: 1,
        md: communities.map(() => "160px"),
      }}
      gutter="xl"
    >
      {communities.map((community) => (
        <CommunityTile key={community.name} href={community.url}>
          <img src={community.logo} alt={community.name} />
          {community.name}
        </CommunityTile>
      ))}
    </CommunityGrid>
  </LakeSection>
);

export default CommunitySection;
