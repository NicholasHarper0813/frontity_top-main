import { connect, styled } from "frontity";
import React from "react";

const Link = ({ actions, link, className, children }) => {
  const onClick = event => {
    if (link.startsWith("http")) return;

    event.preventDefault();
    actions.router.set(link);
    window.scrollTo(0, 0);
  };

  return (
    <LinkEl href={link} onClick={onClick} className={className}>
      {children}
    </LinkEl>
  );
};

const LinkEl = styled.a`
  &:focus {
    outline: thin dotted;
    text-decoration: underline;
  }
`;

export default connect(Link);
