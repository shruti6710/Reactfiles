// Styles and imports were ommited
function TopMenu() {
  const classes = useStyles();

  return (
    <AppBar position='fixed' className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon />
        </IconButton>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Users
          </Typography>
        </MenuItem>
        <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Sign-in method
          </Typography>
        </MenuItem>
		 <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Templates
          </Typography>
        </MenuItem>
		 <MenuItem>
          <Typography variant='h6' className={classes.title}>
            Usages 
          </Typography>
        </MenuItem>
      </Toolbar>
    </AppBar>
  );
}

export default TopMenu;