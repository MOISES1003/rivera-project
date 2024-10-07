import styled from "styled-components";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export function Paginate({ links, NavigationEvent }) {
  const navigation = (link) => {
    NavigationEvent(link);
  };
  return (
    <ContentPaginate>
      <button
        className="firsh"
        onClick={() => navigation(links.first_page_url)}
      >
        Firs
      </button>
      <Content>
        {links.prev_page_url != null ? (
          <button
            className="arrow"
            onClick={() => navigation(links.prev_page_url)}
          >
            <MdKeyboardArrowLeft className="icon" />
          </button>
        ) : null}

        <span>
          {links.current_page} de {links.last_page}
        </span>
        {links.next_page_url != null ? (
          <button
            className="arrow"
            onClick={() => navigation(links.next_page_url)}
          >
            <MdKeyboardArrowRight className="icon" />
          </button>
        ) : null}
      </Content>
      <button className="end" onClick={() => navigation(links.last_page_url)}>
        End
      </button>
    </ContentPaginate>
  );
}

const ContentPaginate = styled.div`
  display: flex;
  gap: 20px;
  button {
    cursor: pointer;
    font-size: 15px;
    border: none;
    height: 25px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    font-size: 25px;
  }
`;
const Content = styled.div`
  display: flex;
  gap: 10px;
  .arrow {
    color: white;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.5s ease;
    &:hover {
      background-color: red;
      border-radius: 50%;
    }
  }
`;
