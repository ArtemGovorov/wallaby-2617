import * as Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";
import $ from 'jquery';

global["$"] = global["jQuery"] = $;

Enzyme.configure({ adapter: new Adapter() });