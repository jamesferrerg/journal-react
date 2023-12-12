import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
} from "../../fixtures/authFixtures";

describe("Pruebas en authSlice", () => {
  test("Debe de regresar el estado inicial y llamarse el auth", () => {
    const state = authSlice.reducer(initialState, {});

    expect(authSlice.name).toBe("auth");
    expect(state).toEqual(initialState);
  });

  test("Debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual(authenticatedState);
  });

  test("Debe de realizar el logout sin argumentos", () => {
    const state = authSlice.reducer(authenticatedState, logout());

    //console.log(state)

    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined,
    });
  });

  test("Debe de realizar el logout y mostrar un mensaje de error", () => {
    const errorMessage = "Credenciales no son correctas";
    const state = authSlice.reducer(
      authenticatedState,
      logout({ errorMessage })
    );

    expect(state).toEqual({
      status: "not-authenticated",
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: "Credenciales no son correctas",
    });
  });

  test('Debe de cambiar el estado a checking', () => { 
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe('checking');
   })
});
