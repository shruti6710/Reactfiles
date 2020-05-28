// Styles and imports were ommited
function MainContent() {
  const classes = useStyles();

  return (
    <main className={classes.fullWidth}>
      <div className={classes.toolbar} />
      <div className={classes.title}>
        <Typography variant='h6'>Search</Typography>
      </div>
      <div className={classes.content}>
        <Typography paragraph>
          No users for this project yet
        </Typography>
      </div>
    </main>
  );
}

export default MainContent;