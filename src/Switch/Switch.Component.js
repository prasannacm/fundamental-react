import path from 'path';
import React from 'react';
import { Switch } from '..';
import { ComponentPage, Example } from '../_playground';

export const SwitchComponent = () => {
    return (
        <ComponentPage
            description={`The **Switch** component is used to activate or deactivate an element. It uses a visual metaphor that is known
                to the user with visible differences between on and off state. It is recommended to always display the
                Switch with a label above it as well as the label of the selected state. For example, the label above
                would be "Active", the Switch state would be “on” and the selected state label displayed to the right of
                the Switch would be “Yes”.`}
            sourceModulePath={path.join(__dirname, './Switch')}
            title='Switch'>

            <Example title='Sizes'>
                <>
                    <Switch>
                        Default Switch
                    </Switch>
                    <Switch compact>
                        Compact Switch
                    </Switch>
                </>
            </Example>

            <Example title='Disabled State'>
                <>
                    <Switch disabled>
                        Disabled Switch
                    </Switch>
                    <Switch checked disabled>
                        Disabled Checked Switch
                    </Switch>
                </>
            </Example>

            <Example title='Semantic'>
                <>
                    <Switch semantic>
                        Semantic Switch
                    </Switch>
                    <Switch checked semantic>
                        Checked Semantic Switch
                    </Switch>

                    <Switch
                        internalLabels={{
                            checked: {
                                text: 'on',
                                glyph: 'accept'
                            },
                            unchecked: {
                                text: 'off',
                                glyph: 'decline'
                            }
                        }}
                        semantic>Semantic Switch with Icons</Switch>
                </>
            </Example>

        </ComponentPage>
    );
};
