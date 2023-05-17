

import PropTypes from 'prop-types'

export function Layout({ children }) {
    Layout.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return (
        <div className='flex flex-col mt-20 items-center'>
            {children}
        </div>
    )
}

