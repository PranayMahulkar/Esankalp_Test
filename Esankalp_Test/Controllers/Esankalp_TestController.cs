using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Services.Description;
using Esankalp_Test.Data;
using Esankalp_Test.Models;

namespace Esankalp_Test.Controllers
{
    public class Esankalp_TestController : Controller
    {
        // GET: Esankalp_Test
        public ActionResult Index()
        {
            return View();
        }
        
        public ActionResult SaveReg (Esankalp_TestModel model)
        {
            try
            {
                return Json(new { Message = (new Esankalp_TestModel().SaveReg(model)) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new {ex.Message},JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetReglist()
        {
            try
            {
                return Json(new { model = (new Esankalp_TestModel().GetReglist()) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message },JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult deleteReg(int ID)
        {
            try
            {
                return Json(new { Message = (new Esankalp_TestModel().deleteReg(ID)) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetRegDetailByID(int ID)
        {
           try
           {
                return Json(new { Message = (new Esankalp_TestModel().GetRegDetailByID(ID)) }, JsonRequestBehavior.AllowGet);
           }
            catch (Exception ex)
            {
                return Json(new {ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
    }
}