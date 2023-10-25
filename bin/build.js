#!/usr/bin/env node

const StyleDictionary = require('../');

const StyleDictionaryExtended = StyleDictionary.extend('config.json')

StyleDictionaryExtended.buildAllPlatforms()