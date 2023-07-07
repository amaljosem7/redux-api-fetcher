import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchDataRequest, fetchDataSuccess, fetchDataFailure} from "./action";
import {fetchData} from "./apiService";

function App({
                 loading,
                 data,
                 error,
                 fetchDataRequest,
                 fetchDataSuccess,
                 fetchDataFailure
             }) {
    useEffect(() => {
        fetchDataRequest();
        fetchData()
            .then((data) => fetchDataSuccess(data))
            .catch((error) => fetchDataFailure(error.message));

    }, [fetchDataRequest, fetchDataSuccess, fetchDataFailure]);

    return (
        <div className="App">
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h1>Data:</h1>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
    loading: state.loading,
    data: state.data,
    error: state.error
})

export default connect(mapStateToProps,
    {
        fetchDataRequest,
        fetchDataSuccess,
        fetchDataFailure
    })(App);
