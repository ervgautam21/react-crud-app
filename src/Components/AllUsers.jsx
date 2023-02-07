import React, { useEffect, useState, useMemo } from 'react'
import { Button } from '@material-ui/core'
import { deleteUser, getallUsers } from '../service/api'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import FilterComponent from './FilterComponent'

const AllUsers = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    const response = await getallUsers()
    console.log(response)
    setUser(response.data)
  }

  const deleteData = async (id) => {
    await deleteUser(id)
    getUsers()
  }
  const headRows = [
    {
      name: 'Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Mobile Number',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: (row) => row.gender,
      sortable: true,
    },
    {
      name: 'Actions',
      selector: (row) => row.id,
      sortable: false,
      cell: (row) => (
        <>
          <Link to={`/edit/${row.id}`} style={{ textDecoration: 'none' }}>
            <Button>Edit</Button>
          </Link>
          <Button variant="danger" onClick={() => deleteData(row.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ]
  const [filterText, setFilterText] = React.useState('')
  const [resetPaginationToggle, setResetPaginationToggle] = React.useState(
    false,
  )
  const filteredItems = user && user.filter(
    (item) =>
      item.name && (item.name.toLowerCase().includes(filterText.toLowerCase()) 
      || item.email.toLowerCase().includes(filterText.toLowerCase())
      || item.address.toLowerCase().includes(filterText.toLowerCase())
      || item.phone.toLowerCase().includes(filterText.toLowerCase())
      || item.gender.toLowerCase().includes(filterText.toLowerCase())
      ),
  )

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle)
        setFilterText('')
      }
    }

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    )
  }, [filterText, resetPaginationToggle])

  return (
    <>
      {user && (
        <DataTable
          columns={headRows}
          pagination
          data={filteredItems}
          paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
          subHeader
          subHeaderComponent={subHeaderComponentMemo}
        //   selectableRows
          persistTableHead
        />
      )}
    </>
  )
}

export default AllUsers
