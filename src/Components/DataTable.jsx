import React from 'react'

const DataTable = ({data, loading}) => {
   
    if(loading)
        return <h3>...Loading</h3>

  return (
    <div>
        <table style={{
            borderCollapse : 'collapse',
            maxWidth : '100%',
            margin : 'auto'
        }}>
            <thead style={{
                background : 'lightgrey',
                fontSize : '16px'

            }}>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>Watchers</th>
                    <th>Clone URL</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.items?.map((el,i)=>(
                        <tr>
                            <td>{i+1}.</td>
                            <td>{el.name}</td>
                            <td>{el.watchers_count}</td>
                            <td>{el.clone_url}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default DataTable