// import { useState, useEffect } from 'react';
import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import Heading from '../../components/Heading';
import { ContactType } from '../../types';

type ContactsTypeProps = {
  contacts: [ContactType];
}

export const getStaticProps:GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }
  
  return {
    props: { contacts: data }
  }
}
const Contacts:FC<ContactsTypeProps> = ({ contacts }) => {

  // const [contacts, setContacts] = useState(null);

  // useEffect(() => { вместо этого лучше использовать getStaticProps, чтобы запрос осуществлялся прямо на сервере и возвращало нам готовую разметку
  //   const fetchData = async () => {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //     const data = await response.json();
  //     setContacts(data);
  //   };

  //   fetchData();
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts list</title>
      </Head>
      <Heading text="Contacts list:" />
      <ul>
        {
          contacts && contacts.map(({ name, id }) => (
            <li key={id}>
              <Link href={`/contacts/${id}`}>
              {name}
              </Link>
            </li>
          ))
        }
      </ul>
    </>

  )
}

export default Contacts;