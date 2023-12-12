import { useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import { Contact } from "./Contact";
// import { Ul } from './ContactsList.styled';
import { useGetContactsQuery } from "../../redux/api";

import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import List from "@mui/material/List";
import { Filter } from "../Filter/Filter";
import { Loader } from "../Loader";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Empty from "./Empty";
import { IContact } from "../../types";

const getFilteredContacts = (contacts: any, filter: string) => {
  return contacts?.filter((contact: any) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactsList = () => {
  const { data: contacts, isLoading, error } = useGetContactsQuery(null);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  // Виводимо помилку
  // useEffect(() => {
  //   if (error) toast.error(error.data.message);
  // }, [error]);

  const Demo = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && contacts?.length > 1 && <Filter />}
      {!isLoading && contacts?.length < 1 && <Empty />}
      {!isLoading && contacts && (
        <Demo>
          <List component="ul">
            {filteredContacts?.map((contact: IContact) => (
              <Contact
                id={contact._id}
                key={contact._id}
                name={contact.name}
                phone={contact.phone}
                email={contact.email}
                avatarURL={contact.avatarURL}
              />
            ))}
          </List>
        </Demo>
      )}
    </>
  );

  // return (
  //   <Ul>
  // {filteredContacts?.map(contact => (
  //   <li key={contact.id}>
  //     <Contact
  //       id={contact.id}
  //       name={contact.name}
  //       number={contact.number}
  //     />
  //   </li>
  // ))}
  //   </Ul>
  // );
};
