/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as Context from "./../context"





declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Mutation: {};
  Player: { // root type
    email?: string | null; // String
    id?: string | null; // String
    name?: string | null; // String
    phoneNumber?: string | null; // String
    teamId?: string | null; // String
  }
  Query: {};
  Team: { // root type
    id?: string | null; // String
    name?: string | null; // String
  }
  User: { // root type
    email: string; // String!
    id?: string | null; // String
    name: string; // String!
    phoneNumber?: string | null; // String
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createPlayer: NexusGenRootTypes['Player'] | null; // Player
    createTeam: NexusGenRootTypes['Team'] | null; // Team
    createUser: NexusGenRootTypes['User'] | null; // User
    deletePlayer: NexusGenRootTypes['Player'] | null; // Player
  }
  Player: { // field return type
    email: string | null; // String
    id: string | null; // String
    name: string | null; // String
    phoneNumber: string | null; // String
    teamId: string | null; // String
  }
  Query: { // field return type
    getPlayer: NexusGenRootTypes['Player'] | null; // Player
    getTeam: NexusGenRootTypes['Team'] | null; // Team
    user: NexusGenRootTypes['User'] | null; // User
  }
  Team: { // field return type
    id: string | null; // String
    name: string | null; // String
    players: Array<NexusGenRootTypes['Player'] | null> | null; // [Player]
  }
  User: { // field return type
    email: string; // String!
    id: string | null; // String
    name: string; // String!
    phoneNumber: string | null; // String
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createPlayer: 'Player'
    createTeam: 'Team'
    createUser: 'User'
    deletePlayer: 'Player'
  }
  Player: { // field return type name
    email: 'String'
    id: 'String'
    name: 'String'
    phoneNumber: 'String'
    teamId: 'String'
  }
  Query: { // field return type name
    getPlayer: 'Player'
    getTeam: 'Team'
    user: 'User'
  }
  Team: { // field return type name
    id: 'String'
    name: 'String'
    players: 'Player'
  }
  User: { // field return type name
    email: 'String'
    id: 'String'
    name: 'String'
    phoneNumber: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPlayer: { // args
      email?: string | null; // String
      name?: string | null; // String
      phoneNumber?: string | null; // String
      teamId?: string | null; // String
    }
    createTeam: { // args
      name: string; // String!
    }
    createUser: { // args
      email: string; // String!
      name: string; // String!
      phoneNumber?: string | null; // String
    }
    deletePlayer: { // args
      id: string; // String!
    }
  }
  Query: {
    getPlayer: { // args
      id: string; // String!
    }
    getTeam: { // args
      id: string; // String!
    }
    user: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}