



export default function GiftTable() {

  return (
    <div>
      {gifts.length > 0 && (
        <TableContainer >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <GiftListHeader />
            <TableBody>
              {gifts.map((gift) => (
                <TableRow
                  key={gift.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {gift.gift_name}
                  </TableCell>
                  <TableCell align="right">{gift.store_url}</TableCell>
                  <TableCell align="right">{gift.price}</TableCell>
                  <TableCell align="right">{gift.quantity}</TableCell>
                  <TableCell align="right">{gift.notes}</TableCell>
                  <TableCell align="right">{gift.most_wanted === true && <FontAwesomeIcon icon={['fas', 'heart']} />} </TableCell>
                  <TableCell align="right" onClick={() => { setOpenGiftModel(true); }}>
                    <FontAwesomeIcon icon={['fas', 'edit']} /></TableCell>
                  {openGiftModel && (
                    <CreateGiftModel
                      onCancel={onCancel}
                      event_id={event.id}
                      giftInfo={giftInfo}
                      setGiftInfo={setGiftInfo}
                      setGifts={setGifts}
                    />
                  )}
                  <TableCell align="right" className="click trash" onClick={() => handleShow(gift.id)}><FontAwesomeIcon icon={['fas', 'trash']} /></TableCell>
                  {ReactDOM.createPortal(
                    <Modal show={show[gift.id]}>
                      <Modal.Header closeButton onClick={() => handleClose(gift.id)}>
                        <Modal.Title>Delete Gift</Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <p className="confirm-msg">Are you sure you wish to delete this gift?</p>
                        <p className="delete-warning">This action cannot be undone</p>
                      </Modal.Body>

                      <Modal.Footer>
                        <div>
                          <ThemeProvider theme={theme}>
                            <Button onClick={() => handleClose(gift.id)} variant="outlined" color="cancel">Cancel</Button>
                          </ThemeProvider>
                        </div>
                        <Button onClick={() => handleDelete(gift.id)} variant="outlined" color="error">Delete</Button>
                      </Modal.Footer>
                    </Modal>,
                    document.body
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  )
}