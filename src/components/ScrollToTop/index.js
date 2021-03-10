import React, {Component} from 'react';
import ScrollButton from 'react-scroll-button';

class ScrollComponent extends Component {
    render() {
        return (
            <ScrollButton
                behavior={'smooth'}
                buttonBackgroundColor={'red'}
                iconType={'arrow-up'}
                style= {{fontSize: '24px'}}
            />
        );
    }
}

export default ScrollComponent;
