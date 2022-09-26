import React from "react";
import {
  Box,
  Typography,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "../context/TransactionProvider";

export const HistoryItem = ({ itemName, amount, uuid }) => {
  const dispatch = useDispatch();

  function handleDelete(targetId) {
    dispatch({
      type: "deleted_transaction",
      targetId: targetId,
    });
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
        width: "clamp(250px, 50%, 500px)",
        "&:hover": { "& .deleteIcon": { display: "block" } },
      }}
    >
      <ListItem
        sx={{
          backgroundColor: "common.white",
          boxShadow: "1px 4px 5px 0px #EDEDED",
          my: "4px",
          borderRight: amount > 0 ? "4px solid green" : "4px solid red",
          borderRadius: "8px",
        }}
      >
        <ListItemText>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography variant="body1">{itemName}</Typography>
            <Typography variant="body1">
              {amount > 0 ? `+${amount}` : amount}
            </Typography>
          </Box>
        </ListItemText>
      </ListItem>
      <IconButton
        className="deleteIcon"
        sx={{ height: "40px", width: "40px", display: "none" }}
        onClick={() => handleDelete(uuid)}
      >
        <DeleteIcon />
      </IconButton>
    </Box>
  );
};
