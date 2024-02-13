const EventModel = require("../modals/event.modal");
const userModal = require("../modals/user.modal");

const getParticipateeListController = async (req, res) => {
    const fetchEvent = await EventModel.findById(req.body.eventId)

    const list = fetchEvent.participateeList;
    
    const response = await Promise.all(list.map(async (id) =>
        await userModal.findOne(_id = id)
    ));    
    
    console.log(response);
    res.status(200).json({
        List : list,
        response: response, 
    });
}
module.exports = getParticipateeListController;