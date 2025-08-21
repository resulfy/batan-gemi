import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemons = createAsyncThunk("pokemon/fetchPokemons", async () => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
    return res.data.results;
});

interface PokemonState {
    items: { name: string; url: string }[];
    loading: boolean;
    error: string | null;
    name: string
}

const initialState: PokemonState = {
    items: [],
    loading: false,
    error: null,
    name: ""
};

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPokemons.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPokemons.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchPokemons.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setName } = pokemonSlice.actions

export default pokemonSlice.reducer;
