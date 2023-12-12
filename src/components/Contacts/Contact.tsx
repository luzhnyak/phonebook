import { useDeleteContactMutation } from "../../redux/api";

import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import DeleteIcon from "@mui/icons-material/Delete";
import LoadingButton from "@mui/lab/LoadingButton";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

type Props = {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  avatarURL?: string;
};

export const Contact: React.FC<Props> = ({
  id,
  name,
  phone,
  email,
  avatarURL,
}) => {
  const [deleteContact, deleteInfo] = useDeleteContactMutation();
  const handleDelete = () => deleteContact(id);

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;
  }

  return (
    <ListItem
      // components={Paper}
      secondaryAction={
        <LoadingButton
          // edge="end"
          aria-label="delete"
          onClick={handleDelete}
          title={`Delete ${name}`}
          loading={deleteInfo.isLoading}
          // loadingPosition="end"
          variant="outlined"
          color="success"
        >
          <DeleteIcon />
        </LoadingButton>
      }
      sx={{ borderBottom: "1px solid lightGreen" }}
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: getRandomHexColor() }} src={avatarURL}>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <Stack>
        <ListItemText primary={name}></ListItemText>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 2 }}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <Link href={"tel:" + phone} underline="hover" sx={{ color: "green" }}>
            <Stack direction="row" spacing={1}>
              <PhoneIcon fontSize="small" />
              <span>{phone}</span>
            </Stack>
          </Link>
          {email && (
            <Link
              href={"mailto:" + email}
              underline="hover"
              sx={{ color: "green" }}
            >
              <Stack direction="row" spacing={1}>
                <MailOutlineIcon fontSize="small" />
                <span>{email}</span>
              </Stack>
            </Link>
          )}
        </Stack>
      </Stack>
    </ListItem>
  );
};
