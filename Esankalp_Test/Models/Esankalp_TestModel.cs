using Esankalp_Test.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace Esankalp_Test.Models
{
    public class Esankalp_TestModel
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string MobileNo { get; set; }
        public string Email { get; set; }
        public string Image { get; set; }

        public string SaveReg (Esankalp_TestModel model)
        {
            string Message = "";
            Esankalp_TestEntities db = new Esankalp_TestEntities();
            if (model.ID == 0)
            {
                var regdata = new tblReg()
                {
                    //ID = model.ID,
                    Name = model.Name,
                    Address = model.Address,
                    MobileNo = model.MobileNo,
                    Email = model.Email,
                    Image = model.Image,
                };
                db.tblRegs.Add(regdata);
                db.SaveChanges();
                Message = "Data Saved Successfully";
            }
            else
            {
                var data = db.tblRegs.Where(p => p.ID == model.ID).FirstOrDefault();
                    if(data != null)
                    {
                      data.ID = model.ID;
                    data.Name = model.Name;
                    data.Address = model.Address;
                    data.MobileNo = model.MobileNo;
                    data.Email = model.Email;
                    data.Image = model.Image;
                    }
                    db.SaveChanges();
                    Message = "Updated Record Successfully";

            }
            
            return Message;
        }
        //===================================LIST=======================================================//
        public List<Esankalp_TestModel> GetReglist()
        {
            Esankalp_TestEntities db = new Esankalp_TestEntities ();
            List<Esankalp_TestModel>LstCategory = new List<Esankalp_TestModel>();
            var Esankalp_Testsd = db.tblRegs.ToList();
            if(Esankalp_Testsd!= null)
            {
                foreach(var  Category  in Esankalp_Testsd)
                {
                    LstCategory.Add(new Esankalp_TestModel()
                    {
                         ID = Category.ID,
                           Name=Category.Name,
                           Address = Category.Address,
                           MobileNo = Category.MobileNo,
                           Email = Category.Email,
                           Image = Category.Image,
                    });
                }
            }
            return LstCategory;
        }
        //-------------------------------------------------DELETE-------------------------------------------------------//
        public string deleteReg(int ID)
        {
            string Msg = "record delete Successfull";
            Esankalp_TestEntities db = new Esankalp_TestEntities(); 
            var data = db.tblRegs.Where(p=> p.ID == ID).FirstOrDefault();
            if(data != null)
            {
                db.tblRegs.Remove(data);
                db.SaveChanges();
            }
            return Msg;
        }
        //========================================EDIT===========================================================//
        public Esankalp_TestModel GetRegDetailByID(int ID)
        {
            Esankalp_TestModel Model = new Esankalp_TestModel();
            Esankalp_TestEntities db = new Esankalp_TestEntities();
            var data =  db.tblRegs.Where(p=>p.ID == ID).FirstOrDefault();
            if (data != null)
            {
                Model.ID = data.ID;
                Model.Name = data.Name;
                Model.Address = data.Address;
                Model.MobileNo = data.MobileNo;
                Model.Email = data.Email;
                Model.Image = data.Image;
            }
            return Model;

        }
        
        
    }
}