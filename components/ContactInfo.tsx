import React from 'react';
import { FC } from 'react';
import { ContactType } from "../types";
import Heading from "./Heading";

type ContactInfoPrps = {
    contact: ContactType,
}

const ContactInfo: FC<ContactInfoPrps> = ({ contact }) => {

    const { name, email, address } = contact || {};
    const { street, suite, city, zipcode } = address || {};

    if (!contact) {
        return <Heading tag='h3' text='Empty contact' />
    }

    return (
        <>
            <Heading tag='h3' text={name} />
                <div>
                    <strong>Email: </strong>
                    {email}
                </div>
                <div>
                    <strong>Adress: </strong>
                    {`${street}, ${suite}, ${city}, ${zipcode}` }
                </div>
        </>
    )
}

export default ContactInfo;