import PreviousIcon from "../icons/previous-icon";
import { connect, styled } from "frontity";
import NextIcon from "../icons/next-icon";
import React, { useEffect } from "react";
import Link from "../link";

const Pagination = ({ state, actions, libraries }) => {
  const { totalPages } = state.source.get(state.router.link);
  const { path, page, query } = libraries.source.parse(state.router.link);
  const isThereNextPage = page < totalPages;
  const isTherePreviousPage = page > 1;
  const getPageLink = pageNo => {
    return libraries.source.stringify({
      path,
      page: pageNo,
      query
    });
  };

  const createPaginationArray = (currentPage, totalPages) => {
    let loopableArray = [];
    let countOfDotItems = 0;

    if (1 === totalPages)
    {
      return loopableArray;
    }

    if (0 < currentPage - 2) 
    {
      loopableArray.push(currentPage - 2);
    }

    if (0 < currentPage - 1) 
    {
      loopableArray.push(currentPage - 1);
    }

    loopableArray.push(currentPage);

    if (totalPages >= currentPage + 1) 
    {
      loopableArray.push(currentPage + 1);
    }

    if (totalPages >= currentPage + 2) 
    {
      loopableArray.push(currentPage + 2);
    }

    if (1 < loopableArray[0] - 1)
    {
      loopableArray.unshift("...");
      countOfDotItems += 1;
    }

    if ( 1 < totalPages - loopableArray[loopableArray.length - (2 - countOfDotItems)])
    {
      loopableArray.push("...");
    }

    if (-1 === loopableArray.indexOf(1)) 
    {
      loopableArray.unshift(1);
    }

    if (-1 === loopableArray.indexOf(totalPages)) 
    {
      loopableArray.push(totalPages);
    }

    return loopableArray;
  };

  const paginationArray = createPaginationArray(page, totalPages);
  
  useEffect(() => {
    if (isThereNextPage) actions.source.fetch(getPageLink(page + 1));
  }, []);

  return (
    <PaginationContainer>
      {isTherePreviousPage && (
        <PaginationLinks
          position="prev"
          ariaLabel="Read newer posts"
          link={getPageLink(page - 1)}
        >
          <PreviousIcon />
          <NavText>Newer posts</NavText>
        </PaginationLinks>
      )}

      <>
        {paginationArray &&
          paginationArray.map((item, index) => {
            // If item is not equal to '...' and the item value is not equal to current page.
            if ("..." !== item && item !== page) {
              return (
                <React.Fragment key={`${item}-${index}`}>
                  <PageNumbers link={getPageLink(item)}>
                    <Text>{item}</Text>
                  </PageNumbers>
                </React.Fragment>
              );
            } else {
              return (
                <CurrentOrDots key={`${item}-${index}`} dots={item === "..."}>
                  <Text>{item}</Text>
                </CurrentOrDots>
              );
            }
          })}
      </>

      {isThereNextPage && (
        <PaginationLinks
          position="next"
          ariaLabel="Read older posts"
          link={getPageLink(page + 1)}
        >
          <NavText>Older posts</NavText>
          <NextIcon />
        </PaginationLinks>
      )}
    </PaginationContainer>
  );
};

export default connect(Pagination);

const CurrentOrDots = styled.span`
  display: inline-block;
  padding: calc(0.5 * 1rem) ${({ dots }) => (dots ? "0" : "")};
  @media (min-width: 768px) {
    ${({ dots }) => (dots ? "padding: 1rem 0;" : "")}
  }
`;

const PageNumbers = styled(Link)`
  padding: calc(0.5 * 1rem);
  display: inline-block;
  @media (min-width: 768px) {
    padding: 1rem;
  }
`;

const PaginationLinks = styled(Link)`
  display: inline-block;
  @media (min-width: 768px) {
    padding: 1rem;
    ${({ position }) =>
      position === "next" ? "padding-right: 0;" : "padding-left: 0;"}
  }
`;

const NavText = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

const PaginationContainer = styled.div`
  padding: 0;
  margin: 0 1rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 700;
  font-size: 0.88889em;
  letter-spacing: -0.02em;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @media (min-width: 768px) {
    margin: 0 calc(10% + 60px);
  }
`;

const Text = styled.span`
  display: inline-block;
`;
