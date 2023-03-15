import React from 'react'

const BorderPage = () => {
    return (
        <div class="container-fluid p-3" style={{ height: '234vh' }}>

            {/* <!-- Page Heading --> */}
            <h1 class="h3 mb-1 text-gray-800">Border Utilities</h1>
            <p class="mb-4">Bootstrap's default utility classes can be found on the official <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                below were created to extend this theme past the default utility classes built into Bootstrap's
                framework.</p>

            {/* <!-- Content Row --> */}
            <div class="row">

                {/* <!-- Border Left Utilities --> */}
                <div class="col-lg-6">

                    <div class="card mb-4 py-3 border-left-primary" style={{ borderLeft: ' 0.25rem solid #4e73df' }}>
                        <div class="card-body">
                            .border-left-primary
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-secondary" style={{ borderLeft: ' 0.25rem solid #858796' }}>
                        <div class="card-body">
                            .border-left-secondary
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-success" style={{ borderLeft: ' 0.25rem solid #1cc88a' }}>
                        <div class="card-body">
                            .border-left-success
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-info" style={{ borderLeft: ' 0.25rem solid #36b9cc' }}>
                        <div class="card-body">
                            .border-left-info
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-warning" style={{ borderLeft: ' 0.25rem solid #f6c23e' }}>
                        <div class="card-body">
                            .border-left-warning
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-danger" style={{ borderLeft: ' 0.25rem solid #e74a3b' }}>
                        <div class="card-body">
                            .border-left-danger
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-left-dark" style={{ borderLeft: ' 0.25rem solid #5a5c69' }}>
                        <div class="card-body">
                            .border-left-dark
                        </div>
                    </div>

                </div>

                {/* <!-- Border Bottom Utilities --> */}
                <div class="col-lg-6">

                    <div class="card mb-4 py-3 border-bottom-primary" style={{ borderBottom: ' 0.25rem solid #4e73df' }}>
                        <div class="card-body">
                            .border-bottom-primary
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-secondary" style={{ borderBottom: ' 0.25rem solid #858796' }}>
                        <div class="card-body">
                            .border-bottom-secondary
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-success" style={{ borderBottom: ' 0.25rem solid #1cc88a' }}>
                        <div class="card-body">
                            .border-bottom-success
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-info" style={{ borderBottom: ' 0.25rem solid #36b9cc' }}>
                        <div class="card-body">
                            .border-bottom-info
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-warning" style={{ borderBottom: ' 0.25rem solid #f6c23e' }}>
                        <div class="card-body">
                            .border-bottom-warning
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-danger" style={{ borderBottom: ' 0.25rem solid #e74a3b' }}>
                        <div class="card-body">
                            .border-bottom-danger
                        </div>
                    </div>

                    <div class="card mb-4 py-3 border-bottom-dark" style={{ borderBottom: ' 0.25rem solid #5a5c69' }}>
                        <div class="card-body">
                            .border-bottom-dark
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default BorderPage