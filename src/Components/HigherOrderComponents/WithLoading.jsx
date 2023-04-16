import React from 'react'

function withLoading(WrappedComponent) {
    return function(props) {
        if(props.loading) {
            return <div>Loading...</div>;
        } else {
            return <WrappedComponent {...props} />;
        }
    }
}

function MyComponent(props) {
    return <div>{props.data}</div>
}

const WithLoading = withLoading(MyComponent);

export default WithLoading;