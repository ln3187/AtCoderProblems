import React from "react";

import { Set } from "immutable";
import {
  //CustomInput,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  Card,
} from "reactstrap";
import { ColorMode } from "../../utils/TableColor";

interface Props {
  tmp: string;
  colorMode: ColorMode;
  selectableLanguages: Set<string>;
  selectedLanguages: Set<string>;
  toggleLanguage: (language: string) => void;
}

export const Languagebutton: React.FC<Props> = (props) => {
  console.log(props.colorMode);
  console.log(props.selectableLanguages);
  return (
    <>
      {props.tmp}
      {props.colorMode === ColorMode.Language &&
        !props.selectableLanguages.isEmpty() && (
          <Row className="my-4">
            <Col className="px-0">
              <Card body>
                <FormGroup check className="m-0 p-0">
                  {props.selectableLanguages
                    .toArray()
                    .sort()
                    .map((language) => (
                      <Label
                        check
                        key={language}
                        style={{ marginLeft: "2rem" }}
                      >
                        <Input
                          type="checkbox"
                          checked={props.selectedLanguages.has(language)}
                          onChange={(): void => props.toggleLanguage(language)}
                        />
                        {language}
                      </Label>
                    ))}
                </FormGroup>
              </Card>
            </Col>
          </Row>
        )}
    </>
  );
};
