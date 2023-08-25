import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import CreateNewList from "../components/CreateNewList";

function MyList() {
  return (
    <>
      <Tabs>
        <TabList className="flex cursor-pointer items-center space-x-5 border-b-[1px] border-neutral-400 p-4 text-neutral-500 ">
          <Tab>My Top Movies</Tab>
          <Tab>My Top Series</Tab>
          <Tab>Movies Bucketlist</Tab>
          <Tab>Series Bucketlist</Tab>
        </TabList>

        <TabPanel className="text-white">
          <h2>Top Movies</h2>
        </TabPanel>
        <TabPanel className="text-white">
          <h2>Top Series</h2>
        </TabPanel>
        <TabPanel className="text-white">
          <h2> Movies Bucketlist </h2>
        </TabPanel>
        <TabPanel className="text-white">
          <h2> Series Bucketlist </h2>
        </TabPanel>
      </Tabs>
    </>
  );
}

export default MyList;
