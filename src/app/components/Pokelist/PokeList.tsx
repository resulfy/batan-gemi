"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons, setName } from "../../../redux/slices/pokeSlice";
import { RootState } from "../../../redux/store";
import { AppDispatch } from "../../../redux/store";

export default function PokeList() {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector((state: RootState) => state.pokemon);
    const [userName, setUserName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")

    useEffect(() => {
        debugger
        console.log(surname)
        dispatch(fetchPokemons());
        dispatch(setName(userName))
    }, [surname]);

    return (
        <div>
            <h2>Pokémon List</h2>
            <ul>
                {items?.map((pokemon) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>

            <input type="text" onChange={(e) => setSurname(e.target.value)} />
            <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </div>
    );
}
