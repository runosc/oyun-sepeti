import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPeople } from "../actions/PeopleActions";
import { FaGift } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


//Bu sadece bir API kullanım örneği bir işlevi yok

const PeopleList = (props) => {
  const { t, i18n } = useTranslation();

    const people = props.people
    useEffect(() => {
        props.getPeople();
    }, []);
    return (
        <div >
            
            <table className="w-full  ">
                <thead>
                    <tr >
                        <th className="text-left">{t('adi')}</th>
                        <th className="text-left">{t('islem')}</th>
                    </tr>
                </thead>
                <tbody>
                    {props.isLoading ? (
                        <p>Yükleniyor...</p>
                    ) : (
                        people.people.map((p) => {
                            return (
                                <tr key={p.id} className=" ">
                                    <td>{p.name}</td>
    
                                    <td><button className="py-2 px-4 w-full justify-center flex bg-green-500 rounded text-white hover:bg-green-400">
                                        <FaGift />
                                    </button></td>
    
                                </tr>
                            );
                        })
                    )}
                   
                </tbody>
            </table>

        </div>

    );
};

const mapStateToProps = (people) => {
    return people
};

export default connect(mapStateToProps, { getPeople})(PeopleList);
