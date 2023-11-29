import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import Textarea from "@mui/joy/Textarea";

export default () => {
  return (
    <main className="flex overflow-hidden">
      <div className="flex-1 hidden lg:block">
        <img
          src="https://cdn.sanity.io/images/eztzxh9q/production/50a870ea7970111ce831b44d8ebc14a3ec77c28a-2121x1414.jpg?w=3840&q=75&fit=clip&auto=format"
          className="w-full h-screen object-cover"
        />
      </div>
      <div className="py-12 flex-1 lg:flex lg:justify-center lg:h-screen lg:overflow-auto text-neutralDGrey">
        <div className="max-w-lg flex-1 mx-auto px-4 text-neutralDGrey">
          <div>
            <h3 className=" text-2xl font-thin">Need emergency?</h3>
            <p className="mt-1 font-bold text-2xl  text-brandPrimary uppercase">
              Book An Appointment
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-5 mt-12 lg:pb-12"
          >
            <div>
              <FormControl fullWidth>
                <InputLabel>Select Doctor</InputLabel>
                <Select label="Select Doctor">
                  <MenuItem value={10}>Dr Ram Singh</MenuItem>
                  <MenuItem value={20}>Ms Khanna</MenuItem>
                  <MenuItem value={30}>Dr Smith</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex space-x-2">
              <TextField
                className="w-1/2"
                label="Name"
                placeholder="Enter Name"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField
                type="number"
                className="w-1/2"
                label="Age"
                placeholder="Enter Age"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </div>
            <div className="flex space-x-2">
              <TextField
                type="number"
                className="w-1/2"
                placeholder="Enter Mobile Number"
                label="Mobile Number"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
              <TextField
                type="email"
                className="w-1/2"
                label="Email"
                placeholder="Enter Email"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </div>
            <div className="flex space-x-2">
              <TextField
                type="date"
                className="w-1/2"
                label="Appointment Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value="2023-11-09"
                onChange={(e) => console.log(e.target.value)}
              />
              <TextField
                type="time"
                className="w-1/2"
                label="Appointment Time"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value="11:11"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                color="neutral"
                minRows={6}
                placeholder="Enter Message"
                size="md"
                variant="outlined"
              />
            </div>
            <button
              className={`bg-brandPrimary text-white font-normal px-8 py-3 rounded font-bold w-full transition duration-300 ease-in-out transform hover:scale-105`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};
