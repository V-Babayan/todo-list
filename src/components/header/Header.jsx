import React, { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { IconContainer, StyledHeader, StyledTitle } from "./Header.styled";
import Button from "../core-ui/button/Button";
import { Paths, Titles } from "../../helpers/consts";

import TodosIcon from "../../icons/Todos.icon";
import ArchivesIcon from "../../icons/Archives.icon";
import TrashIcon from "../../icons/Trash.icon";
import { useModal } from "../../hooks/useModal";

const Header = () => {
  const location = useLocation();
  const { toggleModal } = useModal();

  const createHandle = () => {
    toggleModal();
  };

  return (
    <StyledHeader>
      <StyledTitle>{Titles[location.pathname]}</StyledTitle>
      {location.pathname === Paths.TODOS && <Button onClick={createHandle}>Create todo</Button>}
      <NavLink to={Paths.TODOS}>
        <IconContainer>
          <TodosIcon />
        </IconContainer>
      </NavLink>
      <NavLink to={Paths.ARCHIVES}>
        <IconContainer>
          <ArchivesIcon />
        </IconContainer>
      </NavLink>
      <NavLink to={Paths.TRASH}>
        <IconContainer>
          <TrashIcon />
        </IconContainer>
      </NavLink>
    </StyledHeader>
  );
};

export default memo(Header);
